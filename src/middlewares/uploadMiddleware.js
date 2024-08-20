import multer from 'multer';
import sharp from 'sharp';
import path from 'path';

const storage = multer.memoryStorage();

export const upload = multer({
  storage,
  fileFilter(req, file, cb) {
    const filetypes = /jpeg|jpg|png/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('File upload only supports the following filetypes - ' + filetypes));
    }
  },
});

export const resizeImage = (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `product-${Date.now()}.jpeg`;

  sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`uploads/${req.file.filename}`);

  next();
};