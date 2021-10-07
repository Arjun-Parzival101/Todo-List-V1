//Created our own Date module instead of including it in app.js
//Because it improves code readability and reusability
exports.getDate = function() { //can also be written as module.exports

    const today = new Date();

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
    };

    return today.toLocaleDateString("en-US", options);
}

exports.getDay = function() { //can also be written as module.exports

    const today = new Date();

    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("en-US", options);
}