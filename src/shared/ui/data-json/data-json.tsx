/* eslint-disable @typescript-eslint/no-explicit-any */
export const DataJson = ({ data }: { data: any }) => {

    return <pre className="text-base-content">{JSON.stringify(data, null, 2)}</pre>
};