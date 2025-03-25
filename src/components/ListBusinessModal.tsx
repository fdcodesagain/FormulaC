"use client";

import { useState } from "react";
import { Modal, TextInput, Textarea, Button, Group, Select } from "@mantine/core";
import { useForm } from "@mantine/form";

interface ListBusinessModalProps {
  opened: boolean;
  onClose: () => void;
}

export default function ListBusinessModal({ opened, onClose }: ListBusinessModalProps) {
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      businessName: "",
      category: "",
      address: "",
      contactName: "",
      email: "",
      phone: "",
      description: "",
    },
    validate: {
      businessName: (value) => (value.length < 2 ? "Biznes adı tələb olunur" : null),
      category: (value) => (!value ? "Zəhmət olmasa kateqoriya seçin" : null),
      address: (value) => (!value ? "Ünvan tələb olunur" : null),
      contactName: (value) => (!value ? "Əlaqə şəxsinin adı tələb olunur" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Yanlış email formatı"),
      phone: (value) => (!value ? "Telefon nömrəsi tələb olunur" : null),
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", values);
      setLoading(false);
      form.reset();
      onClose();
      // In a real app, you would send this data to your backend
    }, 1000);
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Biznesinizi Əlavə Edin" size="lg" centered>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput label="Biznes Adı" placeholder="Biznesinizin adını daxil edin" required mt="md" {...form.getInputProps("businessName")} />

        <Select
          label="Kateqoriya"
          placeholder="Kateqoriya seçin"
          required
          mt="md"
          data={[
            { value: "cafe", label: "Kafe" },
            { value: "restaurant", label: "Restoran" },
            { value: "bar", label: "Bar" },
            { value: "entertainment", label: "Əyləncə" },
            { value: "shopping", label: "Alış-veriş" },
            { value: "other", label: "Digər" },
          ]}
          {...form.getInputProps("category")}
        />

        <TextInput label="Ünvan" placeholder="Biznesinizin ünvanını daxil edin" required mt="md" {...form.getInputProps("address")} />

        <TextInput label="Əlaqə Şəxsi" placeholder="Adınızı daxil edin" required mt="md" {...form.getInputProps("contactName")} />

        <Group grow mt="md">
          <TextInput label="Email" placeholder="your@email.com" required {...form.getInputProps("email")} />

          <TextInput label="Telefon Nömrəsi" placeholder="+994 XX XXX XX XX" required {...form.getInputProps("phone")} />
        </Group>

        <Textarea label="Biznes Haqqında" placeholder="Biznesiniz haqqında məlumat verin..." minRows={4} mt="md" {...form.getInputProps("description")} />

        <Group justify="flex-end" mt="xl">
          <Button variant="outline" onClick={onClose}>
            Ləğv et
          </Button>
          <Button type="submit" loading={loading} style={{ backgroundColor: "var(--primary-color)" }}>
            Təsdiq et
          </Button>
        </Group>
      </form>
    </Modal>
  );
}
