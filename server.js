/* =========================================================
 *  서버 진입점 — app.js를 불러와 포트에 바인딩만 합니다.
 * ========================================================= */
const app = require("./app");

const PORT = process.env.PORT || 3383;

app.put("/api/example/:id", (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  res.status(200).json({
    message: `ID ${id} 데이터가 성공적으로 수정되었습니다.`,
    data: updateData,
  });
});

app.listen(PORT, () => {
  console.log(`✅ 서버 실행 중: http://localhost:${PORT}`);
});
