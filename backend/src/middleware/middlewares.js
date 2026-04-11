export const resolveIsVital = (req, res, next) => {
    req.body.isVital = true;
    next();
}

export const resolveIsTask = (req, res, next) => {
    req.body.isVital = false;
    next();
}
