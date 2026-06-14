# Security Model

The public AI Video Studio is planning-only. It does not accept media, store provider credentials, or render videos.

The proposed renderer architecture is documented in the Jae Hugh AI Lab vault. Its non-negotiable controls are:

- Cloudflare Access authentication.
- Private R2 storage with short-lived grants.
- Queue-based jobs and idempotent rendering.
- No public renderer ingress.
- One isolated per-job workspace.
- Fixed FFmpeg argument arrays, never shell interpolation.
- No arbitrary remote media URLs.
- Server-managed secrets and cost ceilings.
- Manual review before publishing.
- Automatic source and output deletion.

Do not add upload or rendering routes to the public Worker without completing the security launch gate.
