var express  = require("express");
var router   = express.Router();

// 목록
router.get("/", function(req, res){
  // 전체 게시글 조회
  /*

  */
  res.render("board/index");
});

// 새글 쓰기 페이지
router.get("/new", function(req, res){
  res.render("board/new");
});

// 글 상세보기
router.get("/:id", function(req, res){
  // 해당 게시물 조회
  /*

  */
  res.render("board/show");
});

// 수정하기 페이지
router.get("/edit/:id", function(req, res){
  // 해당 게시물 조회
  /*

  */
  res.render("board/edit");
});

module.exports = router;
