
const pagseguro = require("../../app/conf");

// describe('transforms', async () => {
//   const dir = resolve(__dirname, 'fixtures')
//   const transforms = await fs.readdir(dir)

//   beforeEach(async () => {
//     await reset()
//   })

// describe("Session", function()  {
// 	test("success", async function() {
//     const app = await require('../../app');
// 		const session = await pagseguro.inicia_sessao();

//     console.log(session);
// 		expect(typeof session).toEqual("object");
// 		expect(session).toHaveProperty("content");
// 		expect(session.content).toHaveLength(32);
// 	});

// 	// test("unauthorized", async function() {
// 	// 	try {
// 	// 		const configError = { ...config.pagseguro, email: "", token: "" };
// 	// 		const client = pagseguro.connect(configError);
// 	// 		const session = await client.session.get();
// 	// 	} catch (e) {
// 	// 		expect(typeof e).toEqual("object");
// 	// 		expect(e).toHaveProperty("name", "PagseguroError");
// 	// 		expect(e).toHaveProperty("status", "error");
// 	// 		expect(e).toHaveProperty("statusCode", 401);
// 	// 		expect(e).toHaveProperty("content");
// 	// 		expect(Array.isArray(e.content)).toEqual(true);
// 	// 	}
// 	// });
// });
