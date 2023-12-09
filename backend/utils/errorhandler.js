class HttpError extends Error{
    constructor(message,errorCode){
        super(message)
        this.errorCode = errorCode

    }
}
function handleError(message,errorCode){
    const error = new HttpError(message, errorCode)
    return error

}
module.exports = handleError