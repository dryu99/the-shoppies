import React from 'react';
import styled from 'styled-components';

const MAX_PAGE_LENGTH = 10;

const PageNavContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 1.5em;
  & > div {
    margin-top: 0.25em;
  }
`;

const PageButton = styled.button`
${p =>
    p.selected &&
  `
    color: white;
    background-color: blue;
  `};
`;

const PageRange = ({ pageNum, pageLength, totalResults }) => {
  const lowerBound = (pageNum * MAX_PAGE_LENGTH) - (MAX_PAGE_LENGTH - 1);
  const upperBound = ((pageNum - 1) * MAX_PAGE_LENGTH) + pageLength;

  return (
    <div>
      <span>
        {`Showing ${lowerBound} to ${upperBound} of ${totalResults} titles`}
      </span>
    </div>
  );
};

const PageSelection = ({ pageNum, totalResults, selectPage }) => {
  const lastPageNum = Math.ceil(totalResults / MAX_PAGE_LENGTH);
  const prevDisabled = pageNum === 1;
  const nextDisabled = pageNum === lastPageNum;

  return (
    <div>
      <button
        onClick={() => selectPage(1)}
        disabled={prevDisabled}
      >
        &lt;
      </button>
      <IndexButtonGroup
        pageNum={pageNum}
        lastPageNum={lastPageNum}
        selectPage={selectPage}
      />
      <button
        onClick={() => selectPage(lastPageNum)}
        disabled={nextDisabled}
      >
        &gt;
      </button>
    </div>
  );
};

const IndexButtonGroup = ({ pageNum, lastPageNum, selectPage }) => {
  const lowerBound = pageNum > 2 ? pageNum - 2 : 1;
  const upperBound = pageNum + 2 > lastPageNum ? lastPageNum : pageNum + 2;

  const buttonsLength = upperBound - lowerBound + 1;

  // array with vals 0...buttonsLength
  const indexList = [...Array(buttonsLength).keys()];

  return (
    <>
      {indexList.map(n => {
        const buttonNum = n + lowerBound;
        return (
          <PageButton
            key={n}
            onClick={() => selectPage(buttonNum)}
            selected={pageNum === buttonNum}
          >
            {buttonNum}
          </PageButton>
        );
      })}
    </>
  );
};

const PageNav = ({ pageNum, pageLength, totalResults, selectPage }) => {
  return (
    <PageNavContainer>
      <PageRange
        pageNum={pageNum}
        pageLength={pageLength}
        totalResults={totalResults}
      />
      <PageSelection
        pageNum={pageNum}
        totalResults={totalResults}
        selectPage={selectPage}
      />
    </PageNavContainer>
  );
};

export default PageNav;