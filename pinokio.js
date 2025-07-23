export default {
  name: "HiDream‑E1",
  description: "Instruction‑based image editing with HiDream‑E1 (Gradio + inference scripts)",
  run: async () => {
    const repo = "https://github.com/Singingmute/HiDream-E1-Pin.git";
    const appDir = "./apps/HiDream‑E1";

    // 1. Clone the forked repo into Pinokio’s apps folder
    await runCommand(`git clone ${repo} "${appDir}"`);

    // 2. Install dependencies: Python requirements + Flash‑Attention + diffusers
    await runCommand(`pip install -r requirements.txt`, { cwd: appDir });
    await runCommand(`pip install -U flash-attn --no-build-isolation`, { cwd: appDir });
    await runCommand(`pip install -U git+https://github.com/huggingface/diffusers.git`, { cwd: appDir });

    // 3. Launch the Gradio demo (adjust for E1.1 or Full as needed)
    // For E1.1:
    await runCommand(`python gradio_demo_1_1.py`, { cwd: appDir });
    // Or for the original Full version, comment above and use:
    // await runCommand(`python gradio_demo.py`, { cwd: appDir });
  }
}
