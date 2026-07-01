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
          description: "A web platform making the attention mechanism tangible, with a live emotion recognition module trained on user input.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-net-load-forecasting-during-the-sobriety-period",
          title: 'Net Load Forecasting During the Sobriety Period',
          description: "Adaptive forecasting tools for energy net load using SARIMA, GAM, and XGBoost, built for the context of energy price volatility and renewable intermittency.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-disease-prediction-amp-bias-mitigation-on-chest-x-rays",
          title: 'Disease Prediction &amp;amp; Bias Mitigation on Chest X-rays',
          description: "A fair deep learning classifier for pulmonary disease detection from chest X-rays, addressing demographic bias in medical imaging models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-bias-analysis-in-vision-language-models-clip",
          title: 'Bias Analysis in Vision-Language Models (CLIP)',
          description: "Studied social biases in OpenAI&#39;s CLIP and explored fine-tuning and adversarial learning strategies to improve fairness on medical images. Internship project.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/CV-EN-GENERAL.pdf", "_blank");
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
