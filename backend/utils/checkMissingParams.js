const checkMissingParams = (params, requiredParams) => {
    const missingParams = [];
    requiredParams.forEach((param) => {
        if (!params.includes(param)) {
            missingParams.push(param);
        }
    });
    return missingParams;
}


module.exports = { checkMissingParams };