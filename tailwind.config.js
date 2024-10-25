tailwind.config = {
    theme:{
        extend:{
            gridTemplateColumns:{
                'auto': 'repeat(auto-fit,minmax(200px, 1fr))'
            },
            fontFamily:{
                Fjalla: ["Fjalla", "sans-serif"],
            
                Cantarell: ["Cantarell", "system-ui"]
            },
            animation:{
                 spin_slow: 'spin 6s linear infinite'
            },

            colors:{
                darkTheme: '#11001F'
            },
          
        }

    },
       darkMode: 'selector'
}


//-------Light and Dark mode function---------//

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  

  function toggleTheme(){
    document.documentElement.classList.toggle('dark');
    
    if(document.documentElement.classList.contains('dark')){
        localStroage.theme = 'dark';
    }else{
        localStorage.theme = 'light';
    }

  }