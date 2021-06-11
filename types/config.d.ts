import { Vue } from "@mr-hope/vuepress-types/types/computed";

interface ConfigBase extends Record<'normalActions' | 'stickyActions', NormalActions[]> {
    dense: boolean;
    transition: 'x' | 'y' | 'scale';
    iconBar: IconBar[];
    eventActions: Record<'link' | 'image', NormalActions[]>;
    sniffingFunctions: {
        image: Array<SniffingFunctionBase<HTMLImageElement[]>>;
        link: Array<SniffingFunctionBase<HTMLAnchorElement[]>>
    }
}

interface SniffingFunctionBase<E> {
    fn: (e: E) => string | null | undefined;
}

interface Handler {
    handler: (instance: typeof Vue) => void;
}

interface IconBar extends Handler {
    icon: string;
}

interface NormalActions extends Handler {
    title: string;
}

type RightmenuConfig = Partial<ConfigBase>;

export { RightmenuConfig, NormalActions };
