   
        const musicAddButton = document.getElementById("music");
        const bongoAddButton = document.getElementById("bongo");
        const musicInput = document.getElementById("musicadd");
        const bongoInput = document.getElementById("bongoadd");
        const musicList = document.getElementById("musiclist");
        const bongoList = document.getElementById("bongolist");

        
        musicAddButton.addEventListener("click", function() {
            const musicName = musicInput.value.trim();
            if (musicName !== "") {
                
                const li = document.createElement("li");
                li.textContent = musicName;
                musicList.appendChild(li);
                musicInput.value = ''; 
            }
        });

        
        bongoAddButton.addEventListener("click", function() {
            const bongoName = bongoInput.value.trim();
            if (bongoName !== "") {
                
                const li = document.createElement("li");
                li.textContent = bongoName;
                bongoList.appendChild(li);
                bongoInput.value = ''; 
            }
        });

