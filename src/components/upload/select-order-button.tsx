import { useEffect } from "react";
import OrderingType from "~/lib/ordering-type";

type SelectOrderButtonProps = {
  isSequentialState: [boolean, (value: boolean) => void];
};

export const SelectOrderButton = ({
  isSequentialState,
}: SelectOrderButtonProps) => {
  const [sequential, setSequential] = isSequentialState;

  useEffect(() => {
    const orderingType = new OrderingType(".login", setSequential);
    return () => {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      orderingType.el?.removeEventListener("click", orderingType.clickAction);
    };
  }, [setSequential]);

  return (
    <form className="login flex justify-center" method="post" action="">
      <div className="login__column">
        <div className="login__form">
          <div className="login__form-pages" data-stage="0">
            <div className="login__form-page">
              <div className="login__segmented border border-sortBg bg-mainBackground text-xs text-gray-600 dark:border dark:border-orderButton dark:bg-mainBackgroundDark dark:text-secondaryDark sm:text-base">
                <button
                  className={`login__segmented-btn aria-selected:text-secondary dark:aria-selected:text-secondaryDark ${!sequential ? "selected" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={!sequential}
                  data-action="access"
                  data-access="0"
                >
                  Random
                </button>
                <button
                  className={`login__segmented-btn aria-selected:text-secondary dark:aria-selected:text-secondaryDark ${sequential ? "selected" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={sequential}
                  data-action="access"
                  data-access="1"
                >
                  Sequential
                </button>
                <div className="login__segmented-focus border border-primaryCardHovered bg-primaryCard dark:border-none dark:bg-orderButton"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
