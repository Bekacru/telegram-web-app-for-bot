module.exports = {
    // ..
    plugins: [
        [
            // npm i -D babel-plugin-module-resolver
            // Alias resolver for `tsconfig.paths`
            // If you edit `tsconfig.json` paths you have to edit also here.
            'module-resolver',
            {
                extensions: ['.ts', '.tsx'], // not sure if you really need this
                root: './',
                alias: {
                    // similar declaration as tsconfig.json but it's actually different !!
                    '@main': './lib', // note that './' is important here.
                    '@react-components': ['./lib/react-components'],
                    // "*": ["./src/*"]
                    // "#utils/*": ['./src/utils/*'],
                    // ☝️ Any path with "*" won't work as you expect for module-resolver
                    // since it treats as a character instead of a glob pattern.
                    // Wasted a day because of this stupid mistake.
                },
            },
        ],
    ],
};
