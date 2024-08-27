// netlify/functions/testFunction.js

exports.handler = async (event) => {
    return {
        statusCode: 200,
        body: "Test Function is working!"
    };
};
