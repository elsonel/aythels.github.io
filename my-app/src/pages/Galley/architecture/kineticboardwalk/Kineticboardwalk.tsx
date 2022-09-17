import { Layout } from '../../../../components/Layout';
import { Page } from '../../../../components/Page';
import { ProjectGallery } from '../../../../components/ProjectGallery';
import { _GalleryArchitectureData } from '../../../../data/data';
import { ImageThumbnail } from '../../../../UI/components/atoms/ImageThumbnail';
import { Explore } from '../../../../UI/components/groups/Explore';
import { GridsData, PanelData } from './data';

const INDEX_DATA = _GalleryArchitectureData.find(
  (e) => e.title === 'KINETIC BOARDWALK'
);
if (!INDEX_DATA) throw 'Invalid project';

export interface IkineticboardwalkProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const Kineticboardwalk: React.FC<IkineticboardwalkProps> = ({
  ...props
}): React.ReactElement => {
  return (
    <Page title="Kinetic Boardwalk" {...props}>
      <Layout>
        <ProjectGallery panelData={PanelData} gridsData={GridsData} />
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
    </Page>
  );
};
