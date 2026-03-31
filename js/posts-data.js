/* Blog post data - edit this array to add new blog posts */
const blogPosts = [
    {
        id: "ddpm",
        title: "Denoising Diffusion Probabilistic Models (DDPM)",
        tag: "Diffusion Models",
        date: "2026-03-15",
        excerpt: "How diffusion models work — adding noise, removing it step by step, and why the results look sharp instead of blurry.",
        file: "posts/ddpm.html"
    },
    {
        id: "arcface",
        title: "ArcFace: Angular Margin Loss for Face Recognition",
        tag: "Face Recognition",
        date: "2026-03-10",
        excerpt: "How ArcFace turns faces into 512 numbers and uses an angular margin to tell different people apart reliably.",
        file: "posts/arcface.html"
    },
    {
        id: "mimicmotion",
        title: "MimicMotion: Pose-Guided Human Video Generation",
        tag: "Video Generation",
        date: "2026-03-05",
        excerpt: "Making a still photo move by copying poses from another video, with better hands and smoother long videos.",
        file: "posts/mimicmotion.html"
    },
    {
        id: "lama",
        title: "LaMa: Large Mask Inpainting with Fourier Convolutions",
        tag: "Image Inpainting",
        date: "2026-02-28",
        excerpt: "How LaMa uses Fourier transforms to see the whole image at once, filling in large missing areas at any resolution.",
        file: "posts/lama.html"
    },
    {
        id: "consisid",
        title: "ConsisID: Keeping Faces Consistent in Generated Videos",
        tag: "Video Generation",
        date: "2026-02-20",
        excerpt: "How ConsisID splits face identity into big features and fine details to keep the same face throughout a generated video.",
        file: "posts/consisid.html"
    },
    {
        id: "text-diffusion",
        title: "How Text Controls Image Generation",
        tag: "Image Editing",
        date: "2026-02-15",
        excerpt: "How CLIP turns words into numbers, how cross-attention lets pixels read text, and how to edit images by changing just the prompt.",
        file: "posts/text-diffusion.html"
    }
];
