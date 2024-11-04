function getQueryParamString(queryParams: { [key: string]: any }): string {
    return "?" + new URLSearchParams(queryParams);
}

export { getQueryParamString }