
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'F:/Desarrollo de SW/Git/CV_Angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Desarrollo%20de%20SW/Git/CV_Angular"
  },
  {
    "renderMode": 2,
    "route": "/Desarrollo%20de%20SW/Git/CV_Angular/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 7771, hash: 'ce8bf73fd185332f0401059547aaf4f0752e9140421784068c2d942932d1e055', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8290, hash: '65d1aeab175b5ef3f1684f08e838ad2eb764a32a62c44df5f1d1556e22811723', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
