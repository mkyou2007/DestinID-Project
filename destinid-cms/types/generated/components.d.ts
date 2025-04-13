import type { Schema, Struct } from '@strapi/strapi';

export interface FacilitiesFacilties extends Struct.ComponentSchema {
  collectionName: 'components_facilities_facilties';
  info: {
    displayName: 'facilties';
    icon: 'write';
  };
  attributes: {
    icon: Schema.Attribute.String;
    label: Schema.Attribute.String;
  };
}

export interface HistoryHistory extends Struct.ComponentSchema {
  collectionName: 'components_history_histories';
  info: {
    displayName: 'history';
    icon: 'underline';
  };
  attributes: {
    content: Schema.Attribute.Text;
    image: Schema.Attribute.Media<'images' | 'files'>;
    title: Schema.Attribute.String;
  };
}

export interface IconsIcon extends Struct.ComponentSchema {
  collectionName: 'components_icons_icons';
  info: {
    displayName: 'icon';
    icon: 'italic';
  };
  attributes: {};
}

export interface LabelsLabel extends Struct.ComponentSchema {
  collectionName: 'components_labels_labels';
  info: {
    displayName: 'label';
    icon: 'bold';
  };
  attributes: {};
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'facilities.facilties': FacilitiesFacilties;
      'history.history': HistoryHistory;
      'icons.icon': IconsIcon;
      'labels.label': LabelsLabel;
    }
  }
}
