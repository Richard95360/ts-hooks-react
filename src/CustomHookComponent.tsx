import * as React from 'react'
import { Beverage } from './types';

  
  function useFetchData<Payload>(
    url: string
  ): {
    data: Payload | null;
    done: boolean;
  } {
    const [data, dataSet] = React.useState<Payload | null>(null);
    const [done, doneSet] = React.useState(false);
  
   React.useEffect(() => {
      fetch(url)
        .then((resp) => resp.json())
        .then((d: Payload) => {
          dataSet(d);
          doneSet(true);
        });
    }, [url]);
  
    return {
      data,
      done,
    };
  }
  
  function CustomHookComponent() {
    const { data } = useFetchData<Beverage[]>("/hv-taplist.json");
    const portlandTaps = React.useMemo(
      () =>
        (data || []).filter((bev) => bev.producerLocation.includes("Portland")),
      [data]
    );
  
    return (
      <div>
        {portlandTaps.length && (
          <img src={portlandTaps![0].logo} alt="Beverage logo" />
        )}
      </div>
    );
  }
  
  export default CustomHookComponent;

 