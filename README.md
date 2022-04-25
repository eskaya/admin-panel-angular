# admin-panel-frontend

admin-panel-frontend bir web uygulamasıdır. Nebular ile geliştirilmektedir.

**Versiyon**: 0.0.0.1\
**Sorumlu**: Esra Kaya \ esra.kaya.5255@gmail.com 

#### Bağımlılıklar

- **NodeJs** (v14.16.1)
- **NPM** (v6.14.12)
- **Typescript** (4.1.2)
- **Angular** (v12.1.0)

#### Notlar

Geliştirme ve ürün ortamında dikkat edilmesi gerekenkler hakkında.

- Projede Nebular UI kitaplığı kullanılmıştır.
- Projede first-nodeJs-project-movie kullanılmıştır. Repoyu indirmek için:
- git clone git@github.com:eskaya/first-nodeJs-project-movie-api.git

#### Dosyalar

Geliştirme ve ürün ortamında kullanılan önemli dosyalar hakkında.\

| **Dosya** | **Açıklama** |
|:----------|:-------------|
| `environment.ts` | Geliştirme modunda kullanılacak ortam değişkenlerini içerir. |
| `environment.prod.ts` | Ürün modunda build almak için kullanılacak ortam değişkenlerini içerir. |

### Ortam Değişkenleri

```bash
export MODE=development
export MONGO_URL=localhost:27012/db
export ROOT=api
```

### Geliştirme Modu

```bash
#Repoyu indiriyoruz.
git clone git@github.com:eskaya/admin-panel.git
cd admin-panel

#NPM paketlerini yüklüyoruz.
npm install

#Uygulamayı geliştirici modunda başlatıyoruz.
#http://localhost:4200
npm run start || ng serve
```


