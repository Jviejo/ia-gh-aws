<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Stack
- Next.js 16.2.1 · React 19 · TypeScript · Tailwind CSS 4
- Node runtime en EC2 (no standalone export — usar `next start`)

---

## Tarea 1 — Landing page de CodeCrypto IA

**Objetivo:** home page profesional para el Master de IA de CodeCrypto.

### Requisitos de diseño
- Hero con headline, subheadline y CTA ("Acceder al Master" / "Saber más")
- Sección de beneficios / módulos del master (cards)
- Sección de testimonios o estadísticas de alumnos
- Footer con logo y enlaces
- Paleta oscura (dark mode por defecto), acento en gradiente crypto/IA
- 100 % responsive; imágenes con `next/image`, fuentes con `next/font`
- Sin librerías de UI externas — solo Tailwind CSS 4

### Archivos a crear/modificar
- `app/page.tsx` — composición de secciones
- `app/layout.tsx` — metadatos SEO (title, description, og:image)
- `components/` — un componente por sección (Hero, Benefits, Testimonials, Footer)

---

## Tarea 2 — GitHub Actions CI/CD → AWS EC2

**Flujo:** push a `main` → GitHub Actions compila → sube artefacto a EC2 → reinicia el servicio.

### Pipeline (`.github/workflows/deploy.yml`)
1. **Build** en runner de GitHub (`npm ci && npm run build`)
2. **Empaquetar** los directorios necesarios: `.next/`, `public/`, `package.json`, `package-lock.json`
3. **Transferir** el paquete a EC2 via `scp` usando la clave SSH almacenada en Secrets
4. **SSH remoto** para: descomprimir, `npm ci --omit=dev`, y reiniciar el servicio systemd

### Secrets requeridos en GitHub (`Settings → Secrets → Actions`)
| Secret | Contenido |
|---|---|
| `EC2_HOST` | IP pública o DNS de la instancia |
| `EC2_USER` | Usuario SSH (ej. `ubuntu` o `ec2-user`) |
| `EC2_SSH_KEY` | Clave privada PEM completa |
| `EC2_DEPLOY_PATH` | Ruta absoluta en EC2 (ej. `/var/www/ia-codecrypto`) |

---

## Tarea 3 — Servicio systemd en EC2

Crear `/etc/systemd/system/ia-codecrypto.service`:

```ini
[Unit]
Description=CodeCrypto IA — Next.js app
After=network.target

[Service]
Type=simple
User=ubuntu
WorkingDirectory=/var/www/ia-codecrypto
ExecStart=/usr/bin/npm start
Restart=on-failure
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
```

Comandos post-deploy:
```bash
sudo systemctl daemon-reload
sudo systemctl enable ia-codecrypto
sudo systemctl restart ia-codecrypto
```

---

## Tarea 4 — Nginx + SSL (Certbot)

**Dominio:** `ia.codecrypto.academy`
**Puerto interno:** 3000 → proxy reverso al 443 público.

### `/etc/nginx/sites-available/ia-codecrypto`
```nginx
server {
    listen 80;
    server_name ia.codecrypto.academy;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl;
    server_name ia.codecrypto.academy;

    ssl_certificate     /etc/letsencrypt/live/ia.codecrypto.academy/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/ia.codecrypto.academy/privkey.pem;

    location / {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Obtener/renovar certificado (solo si no existe):
```bash
sudo certbot --nginx -d ia.codecrypto.academy --non-interactive --agree-tos -m admin@codecrypto.academy
```

---

## Tarea 5 — Repositorio GitHub

- Nombre del repo: **`ia-gh-aws`**
- Rama principal: `main`
- El workflow se activa en push a `main`
- `.gitignore` debe excluir `.next/`, `node_modules/`, `.env*`

