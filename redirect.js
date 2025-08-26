(() => {
    const { pathname, search, hash } = window.location;
    const isIndex = pathname === '/' || pathname.startsWith('/index.html');
    const hasHash = hash.startsWith('#/');

    if (!isIndex && !hasHash) {
        const redirectTo = `/#${pathname}${search}${hash}`;
        window.location.replace(redirectTo);
    }
})();