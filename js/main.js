/* ============================================
   Main JavaScript
   ============================================ */

// --- Navigation ---
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    // Scroll effect on nav
    window.addEventListener('scroll', () => {
        if (window.scrollY > 30) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('open');
        });

        // Close menu on link click
        navLinks.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('open');
            });
        });
    }

    // Scroll indicator
    const scrollIndicator = document.createElement('div');
    scrollIndicator.className = 'scroll-indicator';
    document.body.appendChild(scrollIndicator);

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        scrollIndicator.style.width = percent + '%';
    });

    // Scroll reveal
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
});

// --- Load blog posts ---
function loadRecentPosts(containerId, limit) {
    const container = document.getElementById(containerId);
    if (!container || typeof blogPosts === 'undefined') return;

    const posts = blogPosts.slice(0, limit || blogPosts.length);
    container.innerHTML = posts.map(post => createPostCard(post)).join('');

    // Re-observe for animations
    container.querySelectorAll('.fade-in-up').forEach(el => {
        el.classList.add('visible');
    });
}

function loadAllPosts(containerId) {
    const container = document.getElementById(containerId);
    if (!container || typeof blogPosts === 'undefined') return;

    container.innerHTML = blogPosts.map(post => createPostCard(post)).join('');

    setTimeout(() => {
        container.querySelectorAll('.fade-in-up').forEach(el => {
            el.classList.add('visible');
        });
    }, 100);
}

function createPostCard(post) {
    return `
        <a href="${sanitizeHtml(post.file)}" class="post-card glass-card fade-in-up">
            <span class="post-tag">${sanitizeHtml(post.tag)}</span>
            <h3 class="post-title">${sanitizeHtml(post.title)}</h3>
            <p class="post-excerpt">${sanitizeHtml(post.excerpt)}</p>
            <span class="post-date">${formatDate(post.date)}</span>
        </a>
    `;
}

function formatDate(dateStr) {
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function sanitizeHtml(str) {
    const temp = document.createElement('div');
    temp.textContent = str;
    return temp.innerHTML;
}
