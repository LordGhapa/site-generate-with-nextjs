import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: ` Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius commodi nobis voluptatibus ipsam optio! Ipsa doloremque quisquam, sunt illo odit in velit. Vitae rem, ratione incidunt odit sed inventore quibusdam.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
