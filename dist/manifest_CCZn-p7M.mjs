import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { o as decodeKey } from './chunks/astro/server_BeKtFF-M.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = (_, next) => next();

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/","adapterName":"","routes":[{"file":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/portfolio/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/portfolio","isIndex":false,"type":"page","pattern":"^\\/portfolio\\/?$","segments":[[{"content":"portfolio","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/portfolio.astro","pathname":"/portfolio","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/rss.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/Ibtissam","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/portfolio.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/components/Hero.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/ToggleDarkBtn.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/portfolio@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/portfolio@_@astro":"pages/portfolio.astro.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"pages/rss.xml.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_CCZn-p7M.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/FizzBuzz.md?astroContentCollectionEntry=true":"chunks/FizzBuzz_DTaO_Wqi.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/Introduccion-js.md?astroContentCollectionEntry=true":"chunks/Introduccion-js_2KbBp2P9.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/arrays-objetos.md?astroContentCollectionEntry=true":"chunks/arrays-objetos_CjRQtQdT.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/ciclos.md?astroContentCollectionEntry=true":"chunks/ciclos_BRyywX0t.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/condiciones-js.md?astroContentCollectionEntry=true":"chunks/condiciones-js_Bz8P2C2O.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/funciones-js.md?astroContentCollectionEntry=true":"chunks/funciones-js_CaLzq48n.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/heroe-roto.md?astroContentCollectionEntry=true":"chunks/heroe-roto_CjCgkJoj.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/manipulacion-dom.md?astroContentCollectionEntry=true":"chunks/manipulacion-dom_DL1tD-Yl.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/markdown-guia-estilos.md?astroContentCollectionEntry=true":"chunks/markdown-guia-estilos_Dt2erSoy.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_8nwihibx.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/wsl.md?astroContentCollectionEntry=true":"chunks/wsl_jZz18GiT.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/FizzBuzz.md?astroPropagatedAssets":"chunks/FizzBuzz_DIqL2qqY.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/Introduccion-js.md?astroPropagatedAssets":"chunks/Introduccion-js_VBQY7oFU.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/arrays-objetos.md?astroPropagatedAssets":"chunks/arrays-objetos_DSbmDdvc.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/ciclos.md?astroPropagatedAssets":"chunks/ciclos_JWbvse8i.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/condiciones-js.md?astroPropagatedAssets":"chunks/condiciones-js_p1rDYxiV.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/funciones-js.md?astroPropagatedAssets":"chunks/funciones-js_-OdTiI5S.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/heroe-roto.md?astroPropagatedAssets":"chunks/heroe-roto_BjEY55kF.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/manipulacion-dom.md?astroPropagatedAssets":"chunks/manipulacion-dom_CneRRCwz.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/markdown-guia-estilos.md?astroPropagatedAssets":"chunks/markdown-guia-estilos_DL25NTlz.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_7vwktlux.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/wsl.md?astroPropagatedAssets":"chunks/wsl_X3vSv76I.mjs","\u0000astro:asset-imports":"chunks/_astro_asset-imports_D9aVaOQr.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_BcEe_9wP.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/FizzBuzz.md":"chunks/FizzBuzz_BErmYdgd.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/Introduccion-js.md":"chunks/Introduccion-js_D8xmMwiK.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/arrays-objetos.md":"chunks/arrays-objetos_Dk_L72d2.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/ciclos.md":"chunks/ciclos_DiYrvKPa.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/condiciones-js.md":"chunks/condiciones-js_lRgRxCrF.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/funciones-js.md":"chunks/funciones-js_DqIR0ubW.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/heroe-roto.md":"chunks/heroe-roto_DVnfhYxx.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/manipulacion-dom.md":"chunks/manipulacion-dom_BhyuSUj7.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/markdown-guia-estilos.md":"chunks/markdown-guia-estilos_BAtAPZ6H.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/using-mdx.mdx":"chunks/using-mdx_zphrfIQ7.mjs","C:/Users/REDOUANE ESTC/Desktop/sofidev-portfolio-astro-sofidev/src/content/blog/wsl.md":"chunks/wsl_B4476icT.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BvqK4dys.js","/astro/hoisted.js?q=2":"_astro/hoisted.CE5HF_LN.js","/astro/hoisted.js?q=3":"_astro/hoisted.B4FlxW1J.js","/astro/hoisted.js?q=0":"_astro/hoisted.DxN4W0vS.js","@astrojs/react/client.js":"_astro/client.5I5BMcNS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/Ibtissam/file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/404.html","/Ibtissam/file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/about/index.html","/Ibtissam/file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/blog/index.html","/Ibtissam/file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/portfolio/index.html","/Ibtissam/file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/rss.xml","/Ibtissam/file:///C:/Users/REDOUANE%20ESTC/Desktop/sofidev-portfolio-astro-sofidev/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"YFGpjza4wlWIJO7jusu0BKiz8bDLp95EReWKwpKT6DU=","experimentalEnvGetSecretEnabled":false});

export { manifest };
