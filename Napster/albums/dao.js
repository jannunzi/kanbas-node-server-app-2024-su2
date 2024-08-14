import model from "./model.js";
export const findAllAlbums = model.find();
export const findAlbumById = (id) => model.findById(id);
export const findAlbumByAlbumId = (albumId) => model.findOne({ albumId });
export const createAlbum = (album) => model.create(album);
export const updateAlbum = (albumId, album) =>
  model.updateOne({ albumId }, { $set: album });
export const deleteAlbum = (albumId) => model.deleteOne({ albumId });
