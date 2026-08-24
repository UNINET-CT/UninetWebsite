import { useCallback, useEffect, useRef, useState } from 'react';
import {
  BOARD_WIDTH,
  BOARD_HEIGHT,
  PADDLE_WIDTH,
  PADDLE_WIDTH2,
  PADDLE_HEIGHT,
  PADDLE_HEIGHT2,
  PADDLE_SPEED,
  P1_Y,
  P2_Y,
  CIRCLE_RADIUS,
  CIRCLE_SPAWN_INTERVAL,
  CIRCLE_MIN_SPEED,
  CIRCLE_MAX_SPEED,
  GREEN_PROBABILITY,
  ROUND_DURATION_SECONDS,
} from './constants';
import { createRng, SEED } from './rng';
import './GameBoard.css';

let nextCircleId = 0;
const BOARD_BORDER_WIDTH = 2;
const BOARD_OUTER_WIDTH = BOARD_WIDTH + BOARD_BORDER_WIDTH * 2;
const BOARD_OUTER_HEIGHT = BOARD_HEIGHT + BOARD_BORDER_WIDTH * 2;

export default function GameBoard() {
  const [paddleX, setPaddleX] = useState((BOARD_WIDTH - PADDLE_WIDTH) / 2);
  const [circles, setCircles] = useState([]);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_DURATION_SECONDS);
  const [gameOver, setGameOver] = useState(false);
  const [running, setRunning] = useState(false);
  const [boardScale, setBoardScale] = useState(1);

  const boardViewportRef = useRef(null);
  const paddleXRef = useRef(paddleX);
  const keysRef = useRef(new Set());
  const lastSpawnRef = useRef(0);
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);
  const timeLeftRef = useRef(ROUND_DURATION_SECONDS);
  const gameOverRef = useRef(false);
  const rngRef = useRef(createRng(SEED));

  useEffect(() => {
    paddleXRef.current = paddleX;
  }, [paddleX]);

  useEffect(() => {
    gameOverRef.current = gameOver;
  }, [gameOver]);

  useEffect(() => {
    const viewport = boardViewportRef.current;
    if (!viewport) return undefined;

    const updateScale = (width) => {
      setBoardScale(Math.min(1, width / BOARD_OUTER_WIDTH));
    };

    const resizeObserver = new ResizeObserver(([entry]) => {
      updateScale(entry.contentRect.width);
    });

    const handleWindowResize = () => updateScale(viewport.clientWidth);

    updateScale(viewport.clientWidth);
    resizeObserver.observe(viewport);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const start = useCallback(() => {
    setPaddleX((BOARD_WIDTH - PADDLE_WIDTH) / 2);
    setCircles([]);
    setScore(0);
    setTimeLeft(ROUND_DURATION_SECONDS);
    timeLeftRef.current = ROUND_DURATION_SECONDS;
    setGameOver(false);
    lastSpawnRef.current = 0;
    lastTimeRef.current = null;
    rngRef.current = createRng(SEED);
    nextCircleId = 0;
    setRunning(true);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      keysRef.current.add(e.key);
    };
    const handleKeyUp = (e) => {
      keysRef.current.delete(e.key);
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  useEffect(() => {
    if (!running) return undefined;

    const loop = (time) => {
      if (lastTimeRef.current === null) lastTimeRef.current = time;
      const dt = (time - lastTimeRef.current) / 1000;
      lastTimeRef.current = time;

      if (!gameOverRef.current) {
        const nextTimeLeft = Math.max(0, timeLeftRef.current - dt);
        timeLeftRef.current = nextTimeLeft;
        setTimeLeft(nextTimeLeft);

        if (nextTimeLeft <= 0) {
          setGameOver(true);
        }

        let dx = 0;
        if (keysRef.current.has('ArrowLeft') || keysRef.current.has('a')) dx -= 1;
        if (keysRef.current.has('ArrowRight') || keysRef.current.has('d')) dx += 1;

        if (dx !== 0) {
          const next = Math.min(
            BOARD_WIDTH - PADDLE_WIDTH,
            Math.max(0, paddleXRef.current + dx * PADDLE_SPEED * dt)
          );
          paddleXRef.current = next;
          setPaddleX(next);
        }

        lastSpawnRef.current += dt * 1000;
        let spawnNew = null;

        if (lastSpawnRef.current >= CIRCLE_SPAWN_INTERVAL) {
          lastSpawnRef.current = 0;
          spawnNew = {
            id: nextCircleId++,
            x: CIRCLE_RADIUS + rngRef.current() * (BOARD_WIDTH - CIRCLE_RADIUS * 2),
            y: -CIRCLE_RADIUS,
            speed: CIRCLE_MIN_SPEED + rngRef.current() * (CIRCLE_MAX_SPEED - CIRCLE_MIN_SPEED),
            state: 'unobserved',
          };
        }

        setCircles((prev) => {
          const px = paddleXRef.current;
          const p2x = px + (PADDLE_WIDTH - PADDLE_WIDTH2) / 2;
          const updated = [];
          let scoreDelta = 0;

          for (const c of prev) {
            const y = c.y + c.speed * dt;
            let state = c.state;

            if (
              y + CIRCLE_RADIUS >= P2_Y &&
              y - CIRCLE_RADIUS <= P2_Y + PADDLE_HEIGHT2 &&
              c.x + CIRCLE_RADIUS >= p2x &&
              c.x - CIRCLE_RADIUS <= p2x + PADDLE_WIDTH2
            ) {
              if (state === 'unobserved') {
                state = rngRef.current() < GREEN_PROBABILITY ? 'green' : 'red';
              }
            }

            if (
              y + CIRCLE_RADIUS >= P1_Y &&
              y - CIRCLE_RADIUS <= P1_Y + PADDLE_HEIGHT &&
              c.x + CIRCLE_RADIUS >= px &&
              c.x - CIRCLE_RADIUS <= px + PADDLE_WIDTH
            ) {
              if (state === 'green') scoreDelta += 1;
              continue;
            }

            if (y - CIRCLE_RADIUS > BOARD_HEIGHT) continue;

            updated.push({ ...c, y, state });
          }

          if (spawnNew) updated.push(spawnNew);
          if (scoreDelta) setScore((s) => s + scoreDelta);

          return updated;
        });
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [running]);

  const pressDirection = (key) => (e) => {
    e.preventDefault();
    keysRef.current.add(key);
  };

  const releaseDirection = (key) => () => {
    keysRef.current.delete(key);
  };

  return (
    <div className="game-wrapper">
      <div className="hud">
        <span>Score: {score}</span>
        <span>Time: {Math.max(0, Math.ceil(timeLeft))}s</span>
      </div>

      <div
        ref={boardViewportRef}
        className="board-viewport"
        style={{ height: BOARD_OUTER_HEIGHT * boardScale }}
      >
        <div
          className="board"
          style={{
            width: BOARD_WIDTH,
            height: BOARD_HEIGHT,
            transform: `scale(${boardScale})`,
          }}
        >
          <div className="observation-line" style={{ top: P2_Y + PADDLE_HEIGHT2 }} />

          {circles.map((c) => (
            <div
              key={c.id}
              className={`circle circle--${c.state}`}
              style={{
                width: CIRCLE_RADIUS * 2,
                height: CIRCLE_RADIUS * 2,
                left: c.x - CIRCLE_RADIUS,
                top: c.y - CIRCLE_RADIUS,
              }}
            />
          ))}

          <div
            className="paddle paddle--p2"
            style={{
              width: PADDLE_WIDTH2,
              height: PADDLE_HEIGHT2,
              left: paddleX + (PADDLE_WIDTH - PADDLE_WIDTH2) / 2,
              top: P2_Y,
            }}
          />

          <div
            className="paddle paddle--p1"
            style={{ width: PADDLE_WIDTH, height: PADDLE_HEIGHT, left: paddleX, top: P1_Y }}
          />

          {(!running || gameOver) && (
            <div className="overlay">
              <h1>Beat the Agent</h1>
              <br />
              {gameOver && <p>Time&apos;s Up - final score: {score}</p>}
              <p className="instructions">
                Move with left/right arrows. The look ahead sensor (P2) observes falling circles halfway
                down the screen, revealing if they are green or red circles. Your mission is to catch as
                many green ones as possible with the paddle (P1) on the bottom before the timer runs out.
                <br />
                <br />
                Heads up: moving P1 also moves P2!
              </p>
              <button onClick={start}>{gameOver ? 'Play Again' : 'Start'}</button>
            </div>
          )}
        </div>
      </div>

      <div className="touch-controls">
        <button
          type="button"
          className="touch-controls__btn"
          aria-label="Move left"
          onPointerDown={pressDirection('ArrowLeft')}
          onPointerUp={releaseDirection('ArrowLeft')}
          onPointerLeave={releaseDirection('ArrowLeft')}
          onPointerCancel={releaseDirection('ArrowLeft')}
        >
          ◀
        </button>

        <button
          type="button"
          className="touch-controls__btn"
          aria-label="Move right"
          onPointerDown={pressDirection('ArrowRight')}
          onPointerUp={releaseDirection('ArrowRight')}
          onPointerLeave={releaseDirection('ArrowRight')}
          onPointerCancel={releaseDirection('ArrowRight')}
        >
          ▶
        </button>
      </div>
    </div>
  );
}
