// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "A selection of research projects and personal work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-background",
          title: "background",
          description: "My curriculum vitae - education, research projects, professional experience and skills.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-interactive-transformer-architecture-demo",
          title: 'Interactive Transformer Architecture Demo',
          description: "A Streamlit platform built around a Transformer encoder written from scratch, with sentiment and emotion recognition modules that can be trained online and explained token by token.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-net-load-forecasting-during-the-sobriety-period",
          title: 'Net Load Forecasting During the Sobriety Period',
          description: "Forecasting French daily net electricity demand under energy sobriety and growing renewable production, comparing linear models, SARIMAX, GAMs and XGBoost.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-disease-prediction-amp-bias-mitigation-on-chest-x-rays",
          title: 'Disease Prediction &amp;amp; Bias Mitigation on Chest X-rays',
          description: "A ResNet18 classifier for disease detection on chest X-rays, trained with AIF360 reweighing on patient age and gender to study and reduce bias.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-bias-analysis-in-vision-language-models-clip",
          title: 'Bias Analysis in Vision-Language Models (CLIP)',
          description: "Study of social biases in OpenAI&#39;s CLIP, with fine-tuning and adversarial debiasing experiments for glaucoma detection on Harvard&#39;s FairVLMed dataset.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-complex-valued-neural-networks-for-electromagnetic-scattering",
          title: 'Complex-Valued Neural Networks for Electromagnetic Scattering',
          description: "Physics-informed complex-valued neural networks for the direct scattering problem, compared with real-valued networks. Internship project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-recommender-for-lesser-known-films",
          title: 'Recommender for Lesser-Known Films',
          description: "A personal film recommender trained on a Letterboxd export, built to surface niche and underrated films instead of only popular, well-rated ones.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-mini-llada-a-masked-diffusion-language-model",
          title: 'Mini-LLaDA, a Masked Diffusion Language Model',
          description: "Re-implementation of LLaDA, a discrete diffusion language model of 33M parameters trained from scratch, with an interactive app that shows text being unmasked step by step.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV-FR-GENERAL.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%6F%6C%6F%64%79%61.%61%6C%65%6B%73%61%6E%79%61%6E@%75%6E%69%76%65%72%73%69%74%65-%70%61%72%69%73-%73%61%63%6C%61%79.%66%72", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/aleksanyan-volodya", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/volodya-aleksanyan", "_blank");
        },
      },];
