import multer from "multer";

const upload = multer({
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});
const imageUpload = upload.single("image");

export { imageUpload };
