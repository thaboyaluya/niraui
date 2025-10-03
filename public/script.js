

function setTheme(theme) {
      if (theme === "system") {
        document.documentElement.removeAttribute("data-theme");
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        document.documentElement.setAttribute("data-theme", theme);
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
      localStorage.setItem("theme", theme);
      const toggle = document.getElementById('theme-toggle');
      toggle.value = theme;
    }

    document.addEventListener("DOMContentLoaded", () => {
      const savedTheme = localStorage.getItem("theme") || "dark";
      document.getElementById("theme-toggle").value = savedTheme;
      setTheme(savedTheme);

      // Listen for system preference change
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
        const current = localStorage.getItem("theme") || "dark";
        if (current === "system") setTheme("system");
      });
      

    });

    const checkbox=document.getElementById('hs-basic-usage1p')
    if(checkbox)
    checkbox.addEventListener('change',(e)=>{
      e.preventDefault()

      if(checkbox.checked){
       setTheme('dark')
      }else{
         setTheme('light')
      }
    })


    function showTooltip(elem, msg) {
    elem.setAttribute('class', 'button button-primary p-2  bd-copy tooltip tooltip-primary tooltip-e');
    elem.setAttribute('data-content', msg);


setTimeout(()=>{
    elem.setAttribute('class', 'button button-primary p-2  bd-copy');
    elem.removeAttribute('data-content');
},800)


}

var clipboardSnippets = new ClipboardJS('[data-clipboard-snippet]', {
    target: function(trigger) {
        console.log(trigger)
        console.log(trigger.previousElementSibling)
        return trigger.previousElementSibling;
    }
});

clipboardSnippets.on('success', function(e) {
    e.clearSelection();
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    showTooltip(e.trigger, 'Copied!');
});

clipboardSnippets.on('error', function(e) {
    showTooltip(e.trigger, fallbackMessage(e.action));
});

function fallbackMessage(action) {
    var actionMsg = '';
    var actionKey = (action === 'cut' ? 'X' : 'C');

    if(/iPhone|iPad/i.test(navigator.userAgent)) {
        actionMsg = 'No support :(';
    }
    else if (/Mac/i.test(navigator.userAgent)) {
        actionMsg = 'Press ⌘-' + actionKey + ' to ' + action;
    }
    else {
        actionMsg = 'Press Ctrl-' + actionKey + ' to ' + action;
    }

    return actionMsg;
}


const scrollTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopBtn.classList.add('opacity-100');
    } else {
        scrollTopBtn.classList.remove('opacity-100');
    }
}
);

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
);
