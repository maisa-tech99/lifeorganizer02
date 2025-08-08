document.addEventListener('DOMContentLoaded', function() {
    // Navegação entre seções
    const navLinks = document.querySelectorAll('.life-areas a');
    const sections = document.querySelectorAll('.content-section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove classe active de todos os links e sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Adiciona active no link clicado
            this.classList.add('active');
            
            // Mostra a section correspondente
            const target = this.getAttribute('href').substring(1);
            document.getElementById(target).classList.add('active');
            
            // Carrega o conteúdo dinâmico
            loadSectionContent(target);
        });
    });
    
    // Botão para adicionar nova área
    const addAreaBtn = document.querySelector('.add-area-btn');
    addAreaBtn.addEventListener('click', function() {
        const areaName = prompt('Digite o nome da nova área:');
        if (areaName) {
            addNewArea(areaName);
        }
    });
    
    // Carrega o conteúdo inicial
    loadSectionContent('dashboard');
});

function loadSectionContent(sectionId) {
    const section = document.getElementById(sectionId);
    
    // Simulando carregamento de conteúdo
    setTimeout(() => {
        switch(sectionId) {
            case 'dashboard':
                section.innerHTML = `
                    <h2>Dashboard</h2>
                    <div class="stats-grid">
                        <!-- Estatísticas seriam carregadas aqui -->
                        <div class="stat-card">Tarefas Pendentes: 5</div>
                        <div class="stat-card">Notas Recentes: 3</div>
                        <div class="stat-card">Planilhas: 2</div>
                    </div>
                `;
                break;
                
            case 'tasks':
                section.innerHTML = `
                    <h2>Tarefas</h2>
                    <div class="task-manager">
                        <button class="add-task-btn">+ Nova Tarefa</button>
                        <div class="task-list">
                            <!-- Tarefas seriam carregadas aqui -->
                            <div class="task-item">Revisar metas</div>
                            <div class="task-item">Pagar contas</div>
                        </div>
                    </div>
                `;
                break;
                
            // Adicione os outros casos conforme necessário
        }
    }, 300);
}

function addNewArea(name) {
    const areasList = document.querySelector('.life-areas');
    const newItem = document.createElement('li');
    newItem.innerHTML = `
        <a href="#custom-${name.toLowerCase()}">
            <i class="fas fa-folder"></i> ${name}
        </a>
    `;
    areasList.appendChild(newItem);
    
    // Criar a seção correspondente
    const mainContent = document.querySelector('.main-content');
    const newSection = document.createElement('div');
    newSection.id = `custom-${name.toLowerCase()}`;
    newSection.className = 'content-section';
    newSection.innerHTML = `<h2>${name}</h2><p>Conteúdo personalizado para ${name}</p>`;
    mainContent.appendChild(newSection);
}
