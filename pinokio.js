module.exports = {
  name: "HiDream-E1",
  description: "Instruction-based image editing with HiDream-E1 (Gradio + inference scripts)",
  run: async () => {
    try {
      console.log("Installing requirements.txt...");
      await runCommand("pip install -r requirements.txt");

      console.log("Installing FlashAttention...");
      await runCommand("pip install -U flash-attn --no-build-isolation");

      console.log("Installing diffusers...");
      await runCommand("pip install -U git+https://github.com/huggingface/diffusers.git");

      console.log("Launching Gradio (detached mode)...");

      // Launch Python in detached mode so Pinokio doesn't expect a return
      await runBackgroundCommand("python gradio_demo_1_1.py");

    } catch (err) {
      console.log("Pinokio install failed:", err);
    }
  }
}
