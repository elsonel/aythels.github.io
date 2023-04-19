export function getComponentName(element: React.ReactElement<any>) {
  const node = element as React.ReactElement<React.ComponentType<any>>;
  const type = (node as unknown as React.ReactElement<React.FunctionComponent>)
    .type;
  const displayName =
    typeof type === 'function'
      ? (type as React.FunctionComponent).displayName ||
        (type as React.FunctionComponent).name ||
        'Unknown'
      : type;
  return displayName;
}
