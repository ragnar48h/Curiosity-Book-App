import * as React from 'react';
export default function SceneMap<T extends any>(scenes: {
    [key: string]: React.ComponentType<T>;
}): ({ route, jumpTo, position }: T) => JSX.Element;
