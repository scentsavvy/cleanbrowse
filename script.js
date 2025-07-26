document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const cleanupBtn = document.getElementById('cleanup-btn');
    const resetBtn = document.getElementById('reset-btn');
    const interactBtn = document.getElementById('interact-btn');
    
    // Checkbox elements
    const cookiesCheck = document.getElementById('cookies-check');
    const cacheCheck = document.getElementById('cache-check');
    const localStorageCheck = document.getElementById('localstorage-check');
    const historyCheck = document.getElementById('history-check');
    
    // Storage item containers
    const cookiesItems = document.getElementById('cookies-items');
    const cacheItems = document.getElementById('cache-items');
    const localStorageItems = document.getElementById('localstorage-items');
    const historyItems = document.getElementById('history-items');
    
    // Initial storage data
    const initialData = {
        cookies: [
            'session_id=abc123',
            'preferences=dark_mode',
            'tracking_id=xyz789'
        ],
        cache: [
            'logo.png',
            'styles.css',
            'script.js'
        ],
        localStorage: [
            'user_preferences={"theme":"dark"}',
            'recent_searches=["tech","design"]'
        ],
        history: [
            'Visited: example.com (2 mins ago)',
            'Visited: example.com/page1 (5 mins ago)'
        ]
    };
    
    // Add more data when user interacts
    interactBtn.addEventListener('click', function() {
        // Add more items to each storage type
        const newCookie = document.createElement('div');
        newCookie.className = 'storage-item';
        newCookie.textContent = `analytics_${Date.now()}=tracking_data`;
        cookiesItems.appendChild(newCookie);
        
        const newCache = document.createElement('div');
        newCache.className = 'storage-item';
        newCache.textContent = `image_${Math.floor(Math.random() * 100)}.jpg`;
        cacheItems.appendChild(newCache);
        
        const newLocalStorage = document.createElement('div');
        newLocalStorage.className = 'storage-item';
        newLocalStorage.textContent = `form_data_${Date.now()}={"name":"John"}`;
        localStorageItems.appendChild(newLocalStorage);
        
        const newHistory = document.createElement('div');
        newHistory.className = 'storage-item';
        newHistory.textContent = `Visited: example.com/page${Math.floor(Math.random() * 5) + 2} (${Math.floor(Math.random() * 10) + 1} mins ago)`;
        historyItems.appendChild(newHistory);
        
        // Change button text
        interactBtn.textContent = 'Add More Data';
        interactBtn.style.background = '#27ae60';
    });
    
    // Cleanup functionality
    cleanupBtn.addEventListener('click', function() {
        // Show which items will be cleaned
        let cleanedItems = [];
        
        if (cookiesCheck.checked) {
            cleanedItems.push(...Array.from(cookiesItems.children));
            cookiesItems.innerHTML = '';
        }
        
        if (cacheCheck.checked) {
            cleanedItems.push(...Array.from(cacheItems.children));
            cacheItems.innerHTML = '';
        }
        
        if (localStorageCheck.checked) {
            cleanedItems.push(...Array.from(localStorageItems.children));
            localStorageItems.innerHTML = '';
        }
        
        if (historyCheck.checked) {
            cleanedItems.push(...Array.from(historyItems.children));
            historyItems.innerHTML = '';
        }
        
        // Visual feedback
        if (cleanedItems.length > 0) {
            alert(`Cleaned ${cleanedItems.length} items from your browser!`);
        } else {
            alert('No items selected for cleanup!');
        }
    });
    
    // Reset simulation
    resetBtn.addEventListener('click', function() {
        // Reset checkboxes
        cookiesCheck.checked = true;
        cacheCheck.checked = true;
        localStorageCheck.checked = true;
        historyCheck.checked = true;
        
        // Reset storage items
        resetStorageItems();
        
        // Reset button
        interactBtn.textContent = 'Interact with Site';
        interactBtn.style.background = '#3498db';
    });
    
    // Function to reset storage items to initial state
    function resetStorageItems() {
        cookiesItems.innerHTML = '';
        initialData.cookies.forEach(item => {
            const div = document.createElement('div');
            div.className = 'storage-item';
            div.textContent = item;
            cookiesItems.appendChild(div);
        });
        
        cacheItems.innerHTML = '';
        initialData.cache.forEach(item => {
            const div = document.createElement('div');
            div.className = 'storage-item';
            div.textContent = item;
            cacheItems.appendChild(div);
        });
        
        localStorageItems.innerHTML = '';
        initialData.localStorage.forEach(item => {
            const div = document.createElement('div');
            div.className = 'storage-item';
            div.textContent = item;
            localStorageItems.appendChild(div);
        });
        
        historyItems.innerHTML = '';
        initialData.history.forEach(item => {
            const div = document.createElement('div');
            div.className = 'storage-item';
            div.textContent = item;
            historyItems.appendChild(div);
        });
    }
    
    // Initialize with some data
    resetStorageItems();
});
