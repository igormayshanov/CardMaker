interface StateType<T> {
    state: T,
}

export async function saveStateToJson<T>(state: StateType<T>) {
    const fileName = "file";
    const json = JSON.stringify(state);
    const blob = new Blob([json], { type: 'application/json' });
    const href = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = href;
    link.download = fileName + Date.now() + ".json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}