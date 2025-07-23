export default {
  name: "HiDream-E1",
  description: "Instruction-based image editing with HiDream-E1 (Gradio + inference scripts)",
  run: async () => {
    try {
      // Install dependencies
      await runCommand("pip install -r requirements.txt");
      await runCommand("pip install -U flash-attn --no-build-isolation");
      await runCommand("pip install -U git+https://github.com/huggingface/diffusers.git");

      // Launch Gradio demo (E1.1 by default)
      await runCommand("python gradio_demo_1_1.py");

      // For original version:
      // await runCommand("python gradio_demo.py");

    } catch (err) {
      console.log("Pinokio install failed:", err);
    }
  }
}
