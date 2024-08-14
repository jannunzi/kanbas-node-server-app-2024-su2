import * as dao from "./dao.js";

export default function LikesRoutes(app) {
  app.post("/api/likes", async (req, res) => {
    const currentUser = req.session["currentUser"];
    const album = req.body;
    const userId = currentUser._id;
    await dao.userLikesAlbum(userId, album);
    res.send("Liked");
  });
  app.delete("/api/likes/:albumId", async (req, res) => {
    const currentUser = req.session["currentUser"];
    const userId = currentUser._id;
    const albumId = req.params.albumId;
    await dao.userUnlikesAlbum(userId, albumId);
    res.send("Unliked");
  });
  app.get("/api/likes", async (req, res) => {
    const currentUser = req.session["currentUser"];
    const userId = currentUser._id;
    const albums = await dao.findAlbumsLikedByUser(userId);
    res.json(albums);
  });

  app.get("/api/likes/:albumId", async (req, res) => {
    const albumId = req.params.albumId;
    const users = await dao.findUsersWhoLikedAlbum(albumId);
    res.json(users);
  });
}
