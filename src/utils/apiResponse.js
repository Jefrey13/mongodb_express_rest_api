export const successResponse = (res, data) => {
    return res.status(200).json({
      success: true,
      data,
    });
};
  
export const errorResponse = (res, message, statusCode = 500) => {
    return res.status(statusCode).json({
      success: false,
      message,
    });
};  