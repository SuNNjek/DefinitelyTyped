// Opaque type for the return of the
// plugin function.
export interface TailwindPlugin {
    _: 'OPAQUE_TAILWIND_PLUGIN';
}

// https://tailwindcss.com/docs/plugins
declare function plugin(
    plugin: (helpers: {
        addUtilities: (utils: any) => void;
        matchUtilities: (utils: any) => void;
        addComponents: (components: any) => void;
        matchComponents: (components: any) => void;
        addBase: (styles: any) => void;
        addVariant: (name: string, variant: any) => void;
        e: (className: string) => string;
        prefix: (selector: string) => string;
        theme: (key: string) => any;
        variants: any;
        config: (path: string, fallback: any) => any;
        corePlugins: (pluginName: string) => boolean;
        postcss: any;
    }) => void,
    config?: any,
): TailwindPlugin;

export default plugin;
