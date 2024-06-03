import { useEffect } from "react";
import OrderingType from "~/lib/ordering-type";

export const SelectOrderButton = () => {
  useEffect(() => {
    new OrderingType(".login");
  }, []);

  return (
    <form className="login flex justify-center" method="post" action="">
      <div className="login__column">
        <div className="login__form">
          <div className="login__form-pages" data-stage="0">
            <div className="login__form-page">
              <div className="login__segmented">
                <button
                  className="login__segmented-btn"
                  type="button"
                  role="tab"
                  aria-selected="true"
                  data-action="access"
                  data-access="0"
                >
                  Random
                </button>
                <button
                  className="login__segmented-btn"
                  type="button"
                  role="tab"
                  aria-selected="false"
                  data-action="access"
                  data-access="1"
                >
                  Sequential
                </button>
                <div className="login__segmented-focus"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
