import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Layout } from '../../../../components/Layout';
import { Page } from '../../../../components/Page';
import { _GalleryArchitectureData } from '../../../../data/data';
import { GalleryProjectPanel } from '../../../../UI/components/atoms/GalleryProjectPanel';
import { ImageThumbnail } from '../../../../UI/components/atoms/ImageThumbnail';
import { Explore } from '../../../../UI/components/groups/Explore';
import { GalleryProject } from '../../../../UI/components/groups/GalleryProject';
import { ModalImage } from '../../../../UI/components/groups/ModalImage';
import { Grid } from '../../../../UI/components/layout/Grid';
import { GridData, PanelData } from './data';

const INDEX_DATA = _GalleryArchitectureData.find(
  (e) => e.title === 'KINETIC BOARDWALK'
);
if (!INDEX_DATA) throw 'Invalid project';

export interface IkineticboardwalkProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Kineticboardwalk: React.FC<IkineticboardwalkProps> = ({
  ...props
}): React.ReactElement => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalOffset, setModalOffset] = useState(0);

  return (
    <Page {...props}>
      <Layout>
        <GalleryProjectStyled>
          <GalleryProjectPanel
            title={PanelData.title}
            subtitle={PanelData.subtitle}
            body={PanelData.body}
            facts={PanelData.facts}
          />
          {GridData.map((grid, gridIndex) => (
            <Grid breakpoints={grid.breakpoints} key={gridIndex}>
              {grid.images.map((image, imageIndex) => (
                <ImageThumbnail
                  key={imageIndex}
                  src={image.src}
                  onClick={() => {
                    let toAdd = 0;
                    for (let i = 0; i < GridData.length; i++) {
                      if (i === gridIndex) break;
                      GridData[i].images.forEach(() => toAdd++);
                    }

                    setIsModalOpen(true);
                    setModalOffset(imageIndex + toAdd);
                  }}
                />
              ))}
            </Grid>
          ))}
        </GalleryProjectStyled>
        <Explore title="EXPLORE">
          {_GalleryArchitectureData
            .filter((e) => e !== INDEX_DATA)
            .map((e, i) => (
              <ImageThumbnail
                key={i}
                src={e.src}
                title={e.title}
                subtitle={e.subtitle}
                imageWidth={1}
                imageHeight={1}
                isTitleVisible={true}
              />
            ))}
        </Explore>
      </Layout>
      <ModalImage
        onClick={() => setIsModalOpen(false)}
        indexOffset={modalOffset}
        isVisible={isModalOpen}
        srcArray={GridData.map((grid) => grid.images).flat()}
      />
    </Page>
  );
};

const GalleryProjectStyled = styled(GalleryProject)`
  padding-top: 0px;
`;
