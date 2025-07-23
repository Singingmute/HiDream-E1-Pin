module.exports = {
  name: "HiDream-E1",
  description: "Instruction-based image editing with HiDream-E1 (Gradio + inference scripts)",
  run: async () => {
    try {
      // Step 1: Install dependencies
      await runCommand("pip install -r requirements.txt");
      await runCommand("pip install -U flash-attn --no-build-isolation");
      await runCommand("pip install -U git+https://github.com/huggingface/diffusers.git");

      // Step 2: Launch Gradio interface (E1.1 mode)
      await runCommand("python gradio_demo_1_1.py");

      // Optional: Use original mode instead of E1.1
      // await runCommand("python gradio_demo.py");

    } catch (err) {
      console.log("Pinokio install failed:", err);
    }
  }
}
