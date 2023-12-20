/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'rich-black': ['#020c1b'],
        'maastricht-blue': ['#0a192f'],
        'maastricht-blue-Tint': ['#0a192f9b'],
        'yankees-blue': ['#112240'],
        'space-cadet': ['#233554'],
        'rich-black-shadow': ['rgba(2, 12, 27, 0.7)'],
        'independence': ['#495670'],
        'cool-grey': ['#8892b0'],
        'wild-blue-yonder': ['#a8b2d1'],
        'lavender-blue': ['#ccd6f6'],
        'lavender-web': ['#e6f1ff'],
        'aqua-marine': ['#64ffda'],
        'aqua-marine-Tint': ['rgba(100, 255, 218, 0.1)'],
        'pink-flamingo': ['#f57dff'],
        'maya-blue': ['#57cbff'],
        'item-hover': ['rgb(22 38 71)']
      },
      fontFamily: {
        'cinzel': ['Cinzel'],
        'poppins': ['Poppins'],
        'aldrich': ['Aldrich'],
        'sans-fam': ["'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui, sans-serif"],
        'mono-fam': ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
        'lato-serif': ["'Lato', sansserif"],
        'wall-Poet': ['Wallpoet'],
        'julee': ['Julee'],
        'allerta-stencil': ['Allerta+Stencil'],
        'cinzel-decorative': ['Cinzel+Decorative'],
        'saira-stencilOne': ["'Saira Stencil One', sansserif"],
        'sirin-stencil': ["'Sirin Stencil', sansserif"]
      },
      borderColor: {
        'logo': ['#64ffda']
      },
      boxShadow: {
        'button-shadow': ['5px 5px 0 0'],
        'nav-shadow': ['-10px 0px 30px -15px'],
        'foot-shadow': ['0px -10px 20px 5px'],
        'project-shadow': ['0 20px 30px -15px']
      },
      fontSize: {
        'highlight':['clamp(14px, 3vw, 20px)'],
        'big-heading': ['clamp(50px, 8vw, 70px)'],
        'sub-heading': ['clamp(20px, 6vw, 35px)']
      },
      minHeight: {
        'resume': ['14vh'],
        // 'contact': ['80vh'],
        'footer': ['20vh'],
        '72':['72vh'],
        '80':['80vh']
      },
      gridTemplateColumns: {
        'about': ['1fr 3fr'],
        'qualification': ['2.5fr 3fr']
      },
      height: {
        'profile-md': ['360px'],
        'profile': ['230px']
      },
      width: {
        'three-fourth': ['75vw'],
        'profile-md': ['220px'],
        'profile': ['130px'],
        'skill-md': ['760px'],
        'skill': ['80%'],
        '90vw' : ['90vw'],

      },
      maxWidth:{
        '25vw' : ['25vw'],
        '38vw' : ['38vw'],
        '40vw' : ['40vw'],
        '50vw' : ['50vw'],
        '75vw' : ['75vw'],
        '100vw': ['100vw'],
        
      }
    },
  },
  plugins: [],
}

