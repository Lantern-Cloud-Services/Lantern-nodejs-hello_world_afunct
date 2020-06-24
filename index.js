module.exports = function(context, req) {
    context.res = {
        status: 400,
        body: "Hello World'"
    };

    context.done();
};
