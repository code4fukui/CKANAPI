const listener = Deno.listen({ port: 5000 });
for await(const conn of listener) {
    for await(const req of Deno.serveHttp(conn)) {
        const f=await req.request.formData();
        for (const v of f.entries())
            console.log(v);
        req.respondWith(new Response());
    }
}
